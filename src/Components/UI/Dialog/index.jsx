import React from 'react';
import { Box, Typography, Dialog, DialogContent } from '@mui/material';
import { Button } from '../..';
import { CREATE_PLAN, MAGENTA, CREATED_SUCCESSFULLY } from '../../../Constants';
import styles from './styles';

const CustomDialog = ({ isOpen, setIsOpen }) => {
  return (
    <Dialog open={isOpen}>
      <DialogContent>
        <Box sx={styles.dialogContent}>
          <Typography sx={styles.dialogText}>{CREATED_SUCCESSFULLY}</Typography>
          <Box>
            <Button
              text={CREATE_PLAN}
              color={MAGENTA}
              onClick={() => setIsOpen(false)}
            />
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default CustomDialog;
