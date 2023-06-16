import { Button, Grid, Stack } from '@mui/material';
import { styled } from '@mui/system';
import { ReactNode } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import { CustomError, CustomErrorProps } from './CustomError';
import { DEFAULT_ERROR } from '../utils/NetworkErrorFilter';
import { colors } from '../styles/Colors';
import { NAV_UTIL_HEIGHT } from '../Constants';

interface PageWrapperProps {
  children: ReactNode;
  hideBack?: boolean;
  loading?: boolean;
  skeleton?: ReactNode;
  noPadding?: boolean;
  isError?: boolean;
  errBody?: CustomErrorProps;
  overrideBack?: () => void;
}

const PageGrid = styled(Grid)(({ theme }) => ({
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
}));

const HeaderStack = styled(Stack)(({ theme }) => ({
  width: '100%',
  height: NAV_UTIL_HEIGHT,
  paddingLeft: theme.spacing(4),
  paddingRight: theme.spacing(4),
  boxSizing: 'border-box',
  alignItems: 'center',
  [theme.breakpoints.down('md')]: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));

const BackButton = styled(Button)(() => ({
  textDecoration: 'none',
  color: colors.black,
  fontWeight: 400,
  fontSize: '1rem',
  padding: 0,
}));

/**
 * Container element for all pages. Contains spacing, loading and error handling
 * @param props
 * @returns
 */
export function PageWrapper(props: PageWrapperProps): JSX.Element {
  const { hideBack, noPadding, children, loading } = props;

  const nav = useNavigate();
  const handleClick = () => {
    nav(-1);
  };

  const loaderContainerStyles = {
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <>
      {!hideBack && (
        <HeaderStack direction="row">
          <BackButton
            variant="text"
            startIcon={<ArrowBackIcon />}
            onClick={() => (props.overrideBack ? props.overrideBack() : handleClick())}
          >
            Back
          </BackButton>
        </HeaderStack>
      )}

      <PageGrid
        id="page-wrapper-child-container"
        container
        style={props.loading ? (props.skeleton ? {} : loaderContainerStyles) : {}}
        sx={{
          height: hideBack ? '100%' : `calc(100% - ${NAV_UTIL_HEIGHT})`,
          padding: noPadding ? 0 : undefined,
        }}
      >
        {loading ? (
          props.skeleton || <CircularProgress color="primary" />
        ) : props.isError ? (
          <CustomError
            errorMsg={props.errBody?.errorMsg || DEFAULT_ERROR}
            errorDetails={props.errBody?.errorDetails}
          />
        ) : (
          children
        )}
      </PageGrid>
    </>
  );
}
