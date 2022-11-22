/* eslint-disable react-hooks/exhaustive-deps */
import { Facebook, Instagram, LinkedIn, Twitter } from '@mui/icons-material';
import {
  Avatar,
  Card,
  Stack,
  Typography,
  Grid,
  Box,
  Link,
} from '@mui/material';
import { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';

import ConfirmDeleteMenu from '../../../../client/components/Menu/ConfirmDeleteMenu';
import BaseModal from '../../../../shared/components/modals/BaseModal';
import { selectBlogAuthor } from '../../../../shared/redux/features/blog/blogSlice';
import {
  deleteAuthor,
  fetchAuthors,
} from '../../../../shared/redux/features/blog/authorThunks';
import { useAppDispatch, useAppSelector } from '../../../../shared/redux/hooks';
import { BlogAuthor } from '../../../../shared/types/blog/author';
import AuthorForm from '../../../../admin/components/forms/blog/AuthorForm';
import AdminLayout from '../../../../admin/layout/AdminLayout';

type Props = BlogAuthor;

function AuthorCard(props: Props) {
  const dispatch = useAppDispatch();

  const handleConfirm = () => {
    dispatch(deleteAuthor(props.id));
  };

  //base modal
  const [openModal, setOpenModal] = useState(false);
  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);
  return (
    <Card sx={{ padding: '20px 40px', minHeight: '100px' }}>
      <Stack
        direction={'row'}
        width="100%"
        justifyContent={'end'}
        spacing={2}
        mb={2}
      >
        <BaseModal
          btnText="Edit"
          title="Edit author"
          open={openModal}
          btnColor="warning"
          setOpen={setOpenModal}
          handleClose={handleClose}
          handleOpen={handleOpen}
          variant={'contained'}
        >
          <AuthorForm editMode={true} handleClose={handleClose} {...props} />
        </BaseModal>

        <span>
          <ConfirmDeleteMenu handleDelete={handleConfirm} targetId={props.id} />
        </span>
      </Stack>
      <Stack direction={'row'} gap="20px">
        <Avatar sx={{ width: '70px', height: '70px' }} src={props.avatar}>
          {props.name}
        </Avatar>
        <Box>
          <Typography variant="h6">
            {props.name} {props.second_name}
          </Typography>

          <Stack direction={'row'} gap="10px">
            {props.social_linkedin ? (
              <Link
                href={props.social_linkedin}
                target="_blank"
                referrerPolicy="no-referrer"
                fontSize={'20px'}
              >
                <LinkedIn />
              </Link>
            ) : (
              ''
            )}
            {props.social_facebook ? (
              <Link
                href={props.social_facebook}
                target="_blank"
                referrerPolicy="no-referrer"
                fontSize={'20px'}
              >
                <Facebook />
              </Link>
            ) : (
              ''
            )}

            {props.social_instagram ? (
              <Link
                href={props.social_instagram}
                target="_blank"
                referrerPolicy="no-referrer"
                fontSize={'20px'}
              >
                <Instagram />
              </Link>
            ) : (
              ''
            )}

            {props.social_twitter ? (
              <Link
                href={props.social_twitter}
                target="_blank"
                referrerPolicy="no-referrer"
                fontSize={'20px'}
              >
                <Twitter />
              </Link>
            ) : (
              ''
            )}
          </Stack>
        </Box>
      </Stack>
    </Card>
  );
}

const Index: NextPage = () => {
  const dispatch = useAppDispatch();
  const author = useAppSelector(selectBlogAuthor);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    if (author.status === 'idle') {
      dispatch(fetchAuthors());
    }
  }, []);

  return (
    <>
      <Head>
        <title>Admin - Dashboard</title>
      </Head>
      <AdminLayout>
        <Stack direction={'row'} justifyContent="space-between">
          <Typography variant="h1" fontSize={'25px'}>
            Authors
          </Typography>
          <BaseModal
            btnText={'Create author'}
            btnColor={'info'}
            variant="contained"
            title={'Create author'}
            open={open}
            setOpen={setOpen}
            handleClose={handleClose}
            handleOpen={handleOpen}
          >
            <AuthorForm handleClose={handleClose} editMode={false} />
          </BaseModal>
        </Stack>

        <Grid container spacing={2} mt={5}>
          {author.data.map((author) => (
            <AuthorCard key={author.id} {...author} />
          ))}
        </Grid>
      </AdminLayout>
    </>
  );
};

export default Index;
