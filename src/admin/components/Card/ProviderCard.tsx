import {
  Facebook,
  Instagram,
  LocationCity,
  Person,
  Phone,
  Telegram,
  Web,
} from '@mui/icons-material';
import { Paper, Stack, Avatar, Typography, Link } from '@mui/material';
import NextLink from 'next/link';

import React from 'react';
import { Provider } from '../../../shared/types/provider.d';
import parse from 'html-react-parser';

type Props = Provider;

const ProviderCard = (props: Props) => {
  return (
    <Paper sx={{ padding: '20px 30px' }}>
      <Stack direction={'row'} gap="20px" justifyContent={'space-between'}>
        <Stack direction={'row'} gap="20px">
          <Avatar
            src={props.logo}
            alt="logo"
            sx={{ borderRadius: 0, width: '150px' }}
          />
          <Stack spacing={1}>
            <NextLink href={`/admin/providers/${props.slug}`}>
              <Typography
                variant="subtitle1"
                sx={{ textDecoration: 'underline', cursor: 'pointer' }}
              >
                {props?.title}
              </Typography>
            </NextLink>
            <Stack direction={'row'} spacing={1}>
              <LocationCity />
              <Typography variant="body2">
                {props?.state}, {props?.city}, {props?.address}
              </Typography>
            </Stack>
            <Stack direction={'row'} spacing={1}>
              <Phone />
              <Typography variant="body2">{props?.phone}</Typography>
            </Stack>
            <Stack direction={'row'} spacing={1}>
              <Person />
              <Typography variant="body2">{props?.ceo_name}, CEO</Typography>
            </Stack>
          </Stack>
        </Stack>
        <Stack>
          {props.facebook_url ? (
            <Link href={props.facebook_url} target="_blank">
              <Facebook />
            </Link>
          ) : (
            ''
          )}
          {props.instagram_url ? (
            <Link href={props.instagram_url} target="_blank">
              <Instagram />
            </Link>
          ) : (
            ''
          )}
          {props.telegram_url ? (
            <Link href={props.telegram_url} target="_blank">
              <Telegram />
            </Link>
          ) : (
            ''
          )}

          {props.website_url ? (
            <Link href={props.website_url} target="_blank">
              <Web />
            </Link>
          ) : (
            ''
          )}
        </Stack>
      </Stack>
      <Stack mt={2}>
        <Typography>{parse(props.about)}</Typography>
      </Stack>
    </Paper>
  );
};

export default ProviderCard;
