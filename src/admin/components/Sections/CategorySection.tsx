import {
  Avatar,
  Card,
  CardHeader,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
} from '@mui/material';
import React, { useState } from 'react';
import ConfirmDeleteMenu from '../../../client/components/Menu/ConfirmDeleteMenu';
import BaseModal from '../../../shared/components/modals/BaseModal';
import { deleteCategory } from '../../../shared/redux/features/category/categoryThunk';
import { useAppDispatch } from '../../../shared/redux/hooks';
import { Category, Subcategory } from '../../../shared/types/category.d';
import CategoryForm from '../forms/CategoryForm';
import SubcategoryForm from '../forms/SubcategoryForm';

const CreateSubcategoryModal = ({
  category_id,
  title,
}: {
  category_id: string;
  title: string;
}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <BaseModal
      btnText={'Create subcategory'}
      btnColor={'info'}
      variant="contained"
      title={`Create subcategory for ${title}`}
      open={open}
      setOpen={setOpen}
      handleClose={handleClose}
      handleOpen={handleOpen}
    >
      <SubcategoryForm
        handleClose={handleClose}
        editMode={false}
        category_id={category_id}
      />
    </BaseModal>
  );
};

import SubcategorySection from './SubcategorySection';

type Props = {
  categories: { data: Category[] };
  subcategory: { data: Subcategory[] };
};

const CategorySection: React.FC<Props> = ({ categories, subcategory }) => {
  const dispatch = useAppDispatch();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleDelete = (id: string) => dispatch(deleteCategory(id));

  return (
    <Card sx={{ marginTop: 3 }}>
      <CardHeader
        subtitle={`${categories.data.length} in total`}
        title="Categories"
      />
      <Divider />
      <List>
        {categories.data.map((category, i) => (
          <ListItem
            divider={i < categories.data.length - 1}
            key={category.id}
            sx={{ display: 'block' }}
          >
            <Stack
              direction={'row'}
              justifyContent="space-between"
              width={'100%'}
            >
              <Stack direction={'row'}>
                <ListItemAvatar>
                  <Avatar
                    src={category.icon}
                    alt={category.title}
                    sx={{ borderRadius: 0 }}
                  />
                </ListItemAvatar>
                <ListItemText primary={category.title} />
              </Stack>

              <Stack direction={'row'} alignItems="center" gap="20px">
                <CreateSubcategoryModal
                  title={category.title}
                  category_id={category.id}
                />
                <BaseModal
                  btnText={'Edit category'}
                  btnColor={'info'}
                  variant="outlined"
                  title={'Edit category'}
                  open={open}
                  setOpen={setOpen}
                  handleClose={handleClose}
                  handleOpen={handleOpen}
                >
                  <CategoryForm
                    handleClose={handleClose}
                    editMode={true}
                    {...category}
                  />
                </BaseModal>
                <ConfirmDeleteMenu
                  disabled={Boolean(subcategory.data.length)}
                  handleDelete={handleDelete}
                  targetId={category.id}
                />
              </Stack>
            </Stack>
            <SubcategorySection subcategory={subcategory} category={category} />
          </ListItem>
        ))}
      </List>
    </Card>
  );
};

export default CategorySection;
