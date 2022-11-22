import {
  List,
  ListSubheader,
  ListItem,
  Stack,
  ListItemText,
} from '@mui/material';
import React, { useState } from 'react';
import ConfirmDeleteMenu from '../../../client/components/Menu/ConfirmDeleteMenu';
import BaseModal from '../../../shared/components/modals/BaseModal';
import { deleteSubcategory } from '../../../shared/redux/features/category/categoryThunk';
import { useAppDispatch } from '../../../shared/redux/hooks';
import { Category, Subcategory } from '../../../shared/types/category.d';
import SubcategoryForm from '../forms/SubcategoryForm';

type Props = {
  subcategory: { data: Subcategory[] };
  category: Category;
};

const SubcategorySection: React.FC<Props> = ({ subcategory, category }) => {
  const dispatch = useAppDispatch();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleDeleteSubcategory = (id: string) =>
    dispatch(deleteSubcategory(id));

  return (
    <List
      subheader={
        <ListSubheader component="div" id="subcategory-list-subheader">
          Subcategories of &quot;{category.title}&quot;
        </ListSubheader>
      }
    >
      {subcategory.data.map((sub) => {
        if (sub.category_id === category.id) {
          return (
            <ListItem key={sub.id}>
              <Stack
                direction={'row'}
                justifyContent="space-between"
                alignItems={'center'}
                width="100%"
                borderBottom={'1px solid grey'}
                paddingBottom="10px"
              >
                <Stack direction={'row'} gap="20px" alignItems={'center'}>
                  <ListItemText primary={sub.title} />
                  <ListItemText secondary={sub.description} />
                </Stack>

                <Stack direction={'row'} alignItems="center" gap="20px">
                  <BaseModal
                    btnText={'Edit subcategory'}
                    btnColor={'warning'}
                    variant="outlined"
                    title={'Edit subcategory'}
                    open={open}
                    setOpen={setOpen}
                    handleClose={handleClose}
                    handleOpen={handleOpen}
                  >
                    <SubcategoryForm
                      handleClose={handleClose}
                      editMode={true}
                      {...sub}
                    />
                  </BaseModal>
                  <ConfirmDeleteMenu
                    handleDelete={handleDeleteSubcategory}
                    targetId={sub.id}
                  />
                </Stack>
              </Stack>
            </ListItem>
          );
        }
      })}
    </List>
  );
};

export default SubcategorySection;
