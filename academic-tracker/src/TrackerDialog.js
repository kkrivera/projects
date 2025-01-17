import { Button, Dialog, DialogContent, DialogContentText, DialogTitle, List, ListItem } from '@mui/material';
import React, { useContext, useState } from 'react';
import { CustomizationContext } from './contexts/customizationContext';
import { SubjectContext } from './contexts/subjectContext';
import { Customizer } from './Customizer';
import './styles/TrackerDialog.css';

export function TrackerDialog({ dialogType, setDialogType }) {
  // stateful variables
  const { resetSubjects } = useContext(SubjectContext);
  const { background, setBackground } = useContext(CustomizationContext);
  //   used to move from choice between color and image and actually selecting those options
  const [madeSelection, setMadeSelection] = useState(false);

  const selectCustomization = (type) => {
    setBackground({ ...background, type: type });
    setMadeSelection(true);
  };
  const resetAndClose = () => {
    resetSubjects();
    setDialogType('');
  };

  return (
    <>
      {dialogType === 'customize' ? (
        <Dialog
          onClose={() => {
            setDialogType('');
          }}
          open={dialogType === 'customize'}
        >
          {!madeSelection ? (
            <>
              <DialogTitle>What would you like to customize? </DialogTitle>
              <DialogContent>
                <List>
                  <ListItem>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => {
                        selectCustomization('color');
                      }}
                    >
                      Background Color
                    </Button>
                  </ListItem>
                  <ListItem>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => {
                        selectCustomization('image');
                      }}
                    >
                      Background Image
                    </Button>
                  </ListItem>
                </List>
              </DialogContent>{' '}
            </>
          ) : (
            <Customizer setDialogType={setDialogType} />
          )}
        </Dialog>
      ) : (
        <Dialog
          onClose={() => {
            setDialogType('');
          }}
          open={dialogType === 'delete'}
        >
          <DialogTitle>Are you sure you want to reset?</DialogTitle>
          <DialogContent>
            <DialogContentText className="dialog-content-text">This action cannot be undone.</DialogContentText>
            <Button variant="contained" color="secondary" onClick={resetAndClose}>
              Yes, reset
            </Button>
            <Button
              className="TrackerDialog-button"
              variant="contained"
              color="error"
              onClick={() => {
                setDialogType('');
              }}
            >
              No, cancel
            </Button>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}
