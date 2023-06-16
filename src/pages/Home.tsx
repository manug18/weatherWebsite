import { Typography, Stack, Skeleton, Grid, Select, MenuItem } from '@mui/material';
import { PageWrapper } from '../components/PageWrapper';
import { useQuery } from '@tanstack/react-query';
import { getAllPosts, getCommentsOnPost, getIndividualPost } from '../services/TestService';
import { useState } from 'react';

export function Home() {
  const [postId, setPostId] = useState<number>(0);

  const postsService = useQuery(['posts-all'], getAllPosts);

  const singlePostsService = useQuery(
    ['post', postId],
    () => getIndividualPost(postId.toString()),
    {
      enabled: postsService.isSuccess && Boolean(postId),
    }
  );

  const commentService = useQuery(
    ['comment', postId],
    () => getCommentsOnPost({ postId: postId.toString() }),
    {
      enabled: singlePostsService.isSuccess,
    }
  );

  return (
    <PageWrapper
      loading={
        postsService.isLoading ||
        commentService.isInitialLoading ||
        singlePostsService.isInitialLoading
      }
      skeleton={
        <Stack direction="row" spacing={2} alignItems="center">
          <Skeleton height={30} width="80%" />
          <Skeleton height={50} width="100%" />
        </Stack>
      }
    >
      <Stack spacing={2} width="100%" height="100%">
        <Typography variant="h3">Home</Typography>
        <Grid container gap={1}>
          <Grid item xs={12} lg={3} border="1px solid black">
            <Stack p={2}>
              <Typography variant="h4">Choose post</Typography>
              <Select
                variant="filled"
                color="primary"
                onChange={(e) => setPostId(e.target.value as number)}
              >
                {postsService.data?.map((item, idx) => (
                  <MenuItem key={idx} value={item.id}>
                    {item.title}
                  </MenuItem>
                ))}
              </Select>
            </Stack>
          </Grid>
          <Grid item xs={12} lg={3} border="1px solid black">
            <Stack spacing={2} m={2}>
              <Typography variant="h5">{singlePostsService.data?.title}</Typography>
              <Typography variant="caption">{singlePostsService.data?.body}</Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} lg={3} border="1px solid black" p={2}>
            Total comments: {commentService.data?.length || 0}
          </Grid>
        </Grid>
      </Stack>
    </PageWrapper>
  );
}
