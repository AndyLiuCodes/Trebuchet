import {
  Box,
  Fade,
  FormControl,
  InputLabel,
  Modal,
  Input,
  Typography,
  Divider,
  TextField,
  Grid,
  MenuItem,
  Select,
  RadioGroup,
  Radio,
  FormControlLabel,
  FormLabel,
  Button,
} from '@mui/material';
import { toInteger } from 'lodash';
import { Image } from 'mui-image';
import { useState } from 'react';
import {
  useServerApplications,
  useSetServerApplications,
} from '@/pages/Home/hooks/ServerApplicationsProvider';
import { ModalApplicationDetails } from '@/types';
import useApplicationService from '@/hooks/ApplicationService';

type AddApplicationProps = {
  modalOpen: boolean;
  handleCloseModal: () => void;
};

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'secondary.main',
  border: '2px solid secondary.contrastText',
  borderRadius: '8px',
  boxShadow: 24,
  width: '60%',
  pt: 2,
  px: 4,
  pb: 1,
};

const titleSizes = {
  xs: 23,
  sm: 25,
  lg: 30,
  xl: 35,
};

const applications = [
  {
    value: 0,
    label: 'Proxmox',
  },
  {
    value: 1,
    label: 'Website',
  },
  {
    value: 2,
    label: 'Custom',
  },
];

type inputsType = {
  applicationName: string;
  url: string;
  applicationType: string;
  isTracked: boolean;
  syncFrequency: number;
  description: string;
};

const initialInputs: inputsType = {
  applicationName: '',
  url: '',
  applicationType: '',
  isTracked: false,
  syncFrequency: 10,
  description: '',
};

export function AddApplicationModal({
  modalOpen,
  handleCloseModal,
}: AddApplicationProps) {
  const [inputs, setInputs] = useState<inputsType>(initialInputs);
  const serverApplications = useServerApplications();
  const setServerApplications = useSetServerApplications();
  const applicationService = useApplicationService();

  function handleChangeValue(newValue: any) {
    setInputs({ ...inputs, ...newValue });
  }

  function onSubmit() {
    const newApplicationDetails: ModalApplicationDetails = {
      name: inputs.applicationName,
      description: inputs.description,
      isTracked: inputs.isTracked,
      syncFrequency: inputs.syncFrequency,
      applicationType: inputs.applicationType,
      serverImage: null,
      url: inputs.url,
      isFavourite: false,
      position: serverApplications.length,
    };
    applicationService
      .addServerApplication(newApplicationDetails)
      .then((res) => {
        setInputs(initialInputs);
        setServerApplications([
          ...serverApplications,
          { ...newApplicationDetails, id: res.id, dateAdded: new Date() },
        ]);
        handleCloseModal();
      });
  }

  return (
    <Modal open={modalOpen} onClose={handleCloseModal}>
      <Fade in={modalOpen}>
        <Box sx={style}>
          <Box>
            <Typography sx={{ fontSize: titleSizes, textAlign: 'center' }}>
              Add New Application
            </Typography>
          </Box>
          <Divider />
          <form style={{ marginTop: '15px' }}>
            <Grid container direction='row' spacing={4}>
              <Grid item xs={4}>
                <Image
                  src='src/assets/ApplicationLogos/proxmox-logo.png'
                  fit='contain'
                  duration={0}
                />
              </Grid>
              <Grid item xs={8}>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <TextField
                      label='Application Name'
                      fullWidth
                      color='info'
                      variant='filled'
                      value={inputs.applicationName}
                      onChange={(e) =>
                        handleChangeValue({ applicationName: e.target.value })
                      }
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      label='URL'
                      fullWidth
                      color='info'
                      variant='filled'
                      value={inputs.url}
                      onChange={(e) =>
                        handleChangeValue({ url: e.target.value })
                      }
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <FormControl fullWidth variant='filled'>
                      <InputLabel id='application-type-select'>
                        Application Type
                      </InputLabel>
                      <Select
                        labelId='application-type-select'
                        label='Application Type'
                        value={inputs.applicationType}
                        onChange={(e) => {
                          handleChangeValue({
                            applicationType: e.target.value,
                          });
                        }}
                      >
                        {applications.map((application) => (
                          <MenuItem
                            key={application.value}
                            value={application.label}
                          >
                            {application.label}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      label='Tags'
                      fullWidth
                      color='info'
                      variant='filled'
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <FormControl fullWidth color='info' variant='filled'>
                      <FormLabel id='track-online-btn-group'>
                        Track Online Status
                      </FormLabel>
                      <RadioGroup
                        row
                        aria-labelledby='track-online-btn-group'
                        name='row-track-online-btn-group'
                        value={inputs.isTracked}
                        onChange={(e) => {
                          handleChangeValue({
                            isTracked: e.target.value === 'true',
                          });
                        }}
                      >
                        <FormControlLabel
                          value={false}
                          control={<Radio color='info' />}
                          label='Disabled'
                        />
                        <FormControlLabel
                          value={true}
                          control={<Radio color='info' />}
                          label='Enabled'
                        />
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      label='Syncronization Frequency'
                      variant='filled'
                      color='info'
                      fullWidth
                      value={inputs.syncFrequency}
                      disabled
                      onChange={(e) => {
                        handleChangeValue({
                          syncFrequency: toInteger(e.target.value),
                        });
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label='Description'
                      fullWidth
                      variant='filled'
                      color='info'
                      multiline
                      rows={4}
                      value={inputs.description}
                      onChange={(e) => {
                        handleChangeValue({
                          description: e.target.value,
                        });
                      }}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              container
              justifyContent={'flex-end'}
              spacing={1}
              sx={{ marginY: '10px' }}
            >
              <Grid item>
                <Button
                  sx={{
                    backgroundColor: 'background.default',
                    color: 'primary.main',
                    '&:hover': {
                      backgroundColor: 'background.paper',
                    },
                  }}
                  type={'button'}
                  onClick={() => {
                    onSubmit();
                  }}
                >
                  Add
                </Button>
              </Grid>
              <Grid item>
                {/* Add a confirmation message to indicate that data will be lost */}
                <Button color='error' onClick={handleCloseModal}>
                  Cancel
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Fade>
    </Modal>
  );
}
