/* eslint-disable react/prop-types */
import { Box, FormLabel } from '@mui/material';
import { useEffect, useRef, useState } from 'react';

const RichText = ({ value, setValue, label = 'About' }) => {
  const editorRef = useRef();
  const [editorLoaded, setEditorLoaded] = useState(false);
  const { CKEditor, ClassicEditor } = editorRef.current || {};

  useEffect(() => {
    editorRef.current = {
      CKEditor: require('@ckeditor/ckeditor5-react').CKEditor, //Added .CKEditor
      ClassicEditor: require('@ckeditor/ckeditor5-build-classic'),
    };
    setEditorLoaded(true);
  }, []);
  return (
    <Box sx={{ zIndex: 999 }}>
      <FormLabel>{label}</FormLabel>
      {editorLoaded ? (
        <CKEditor
          editor={ClassicEditor}
          data={value}
          onChange={(event, editor) => {
            const data = editor.getData();
            setValue(data);
          }}
        />
      ) : (
        ''
      )}
    </Box>
  );
};

export default RichText;
