import {
  Box,
  Fade,
  FormControl,
  InputLabel,
  Modal,
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
  SelectChangeEvent,
} from '@mui/material';
import { toInteger } from 'lodash';
import { Image } from 'mui-image';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useServerApplications } from '@/pages/Home/hooks/ServerApplicationsProvider';
import { ModalApplicationDetails } from '@/types';
import useApplicationService from '@/hooks/ApplicationService';
import {
  Applications,
  Custom,
  ApplicationOptionType,
} from '@/utils/SupportedApplications';
import { ConfirmationModal } from '@/components/Modals/ConfirmationModal';

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
  overflowY: 'auto',
  maxHeight: '90%',
  display: 'block',
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: '#3c2a21',
    margin: '10px',
    borderRadius: '50vw',
    border: '0.15em solid #1a120b',
  },
};

const titleSizes = {
  xs: 23,
  sm: 25,
  lg: 30,
  xl: 35,
};

type inputsType = {
  applicationName: string;
  url: string;
  applicationType: string;
  isTracked: boolean;
  syncFrequency: number;
  description: string;
  imagePath: string;
  isCustomImage: boolean;
};

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Application Name cannot be empty.')
    .max(255, 'Application Name must be less than 255 characters.'),
  description: Yup.string(),
  isTracked: Yup.boolean().required('Field cannot be empty.'),
  syncFrequency: Yup.number(),
  applicationType: Yup.string().required('Application Type cannot be empty.'),
  url: Yup.string()
    .required('URL cannot be empty')
    .matches(
      /^(http|https):\/\//,
      'The URL must being with http:// or https://'
    ),
});

const initialInputs: inputsType = {
  applicationName: '',
  url: '',
  applicationType: 'Custom',
  isTracked: false,
  syncFrequency: 10,
  description: '',
  imagePath: Custom.imagePath,
  isCustomImage: false,
};

export function AddApplicationModal({
  modalOpen,
  handleCloseModal,
}: AddApplicationProps) {
  const [inputs, setInputs] = useState<inputsType>(initialInputs);
  const [childModalOpen, setChildModalOpen] = useState(false);
  const [serverApplications, setServerApplications] = useServerApplications();
  const applicationService = useApplicationService();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  function handleChangeValue(newValue: any) {
    setInputs({ ...inputs, ...newValue });
  }

  function handleOpenChildModal() {
    setChildModalOpen(true);
  }

  function handleCloseChildModal() {
    setChildModalOpen(false);
  }

  function handleConfirmation() {
    setInputs(initialInputs);
    handleCloseChildModal();
    handleCloseModal();
  }

  function handleCloseCurrentModal() {
    reset();
    handleCloseModal();
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
      imagePath: inputs.imagePath,
      isCustomImage: inputs.isCustomImage,
    };
    applicationService
      .addServerApplication(newApplicationDetails)
      .then((res) => {
        reset();
        setInputs(initialInputs);
        setServerApplications([
          ...serverApplications,
          { ...newApplicationDetails, id: res.id, dateAdded: new Date() },
        ]);
        handleCloseModal();
      });
  }

  return (
    <Modal open={modalOpen} onClose={handleCloseCurrentModal}>
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
              <Grid item xs={12} sm={6} lg={4} sx={{ maxHeight: '350px' }}>
                <Image src={inputs.imagePath} fit='contain' duration={0} />
              </Grid>
              <Grid item xs={12} sm={6} lg={8}>
                <Grid container spacing={2}>
                  <Grid item xs={12} lg={6}>
                    <TextField
                      label='Application Name'
                      fullWidth
                      color='info'
                      variant='filled'
                      value={inputs.applicationName}
                      {...register('name')}
                      onChange={(e) =>
                        handleChangeValue({ applicationName: e.target.value })
                      }
                      error={errors.name ? true : false}
                      helperText={errors.name?.message?.toString()}
                    />
                  </Grid>
                  <Grid item xs={12} lg={6}>
                    <TextField
                      label='URL'
                      fullWidth
                      color='info'
                      variant='filled'
                      value={inputs.url}
                      {...register('url')}
                      onChange={(e) =>
                        handleChangeValue({ url: e.target.value })
                      }
                      error={errors.url ? true : false}
                      helperText={errors.url?.message?.toString()}
                    />
                  </Grid>
                  <Grid item xs={12} lg={6}>
                    <FormControl fullWidth variant='filled'>
                      <InputLabel id='application-type-select' color='info'>
                        Application Type
                      </InputLabel>
                      <Select
                        labelId='application-type-select'
                        label='Application Type'
                        color='info'
                        value={inputs.applicationType}
                        inputProps={{
                          MenuProps: {
                            MenuListProps: {
                              sx: {
                                backgroundColor: 'background.default',
                                color: 'primary.main',
                              },
                            },
                          },
                        }}
                        {...register('applicationType')}
                        error={errors.name ? true : false}
                        onChange={(e) => {
                          const applicationName = e.target.value;
                          handleChangeValue({
                            applicationType: applicationName,
                            imagePath: Applications[applicationName].imagePath,
                          });
                        }}
                      >
                        {Object.values(Applications).map(
                          (application: ApplicationOptionType) => {
                            return (
                              <MenuItem
                                key={application.id}
                                value={application.label}
                              >
                                {application.label}
                              </MenuItem>
                            );
                          }
                        )}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} lg={6}>
                    <TextField
                      label='Tags'
                      fullWidth
                      color='info'
                      variant='filled'
                    />
                  </Grid>
                  <Grid item xs={12} lg={6}>
                    <FormControl fullWidth color='info' variant='filled'>
                      <FormLabel id='track-online-btn-group'>
                        Track Online Status
                      </FormLabel>
                      <RadioGroup
                        row
                        aria-labelledby='track-online-btn-group'
                        value={inputs.isTracked}
                        {...register('isTracked')}
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
                  <Grid item xs={12} lg={6}>
                    <TextField
                      label='Syncronization Frequency'
                      variant='filled'
                      color='info'
                      fullWidth
                      value={inputs.syncFrequency}
                      disabled={!inputs.isTracked}
                      {...register('syncFrequency')}
                      error={errors.syncFrequency ? true : false}
                      helperText={errors.syncFrequency?.message?.toString()}
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
                      {...register('description')}
                      error={errors.description ? true : false}
                      helperText={errors.description?.message?.toString()}
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
                  onClick={handleSubmit(onSubmit)}
                >
                  Add
                </Button>
              </Grid>
              <Grid item>
                <Button
                  color='error'
                  onClick={() => {
                    inputs !== initialInputs
                      ? handleOpenChildModal()
                      : handleCloseCurrentModal();
                  }}
                >
                  Cancel
                </Button>
              </Grid>
            </Grid>
          </form>
          <ConfirmationModal
            modalOpen={childModalOpen}
            onClose={handleCloseChildModal}
            onCancel={handleCloseChildModal}
            onSubmit={handleConfirmation}
            confirmationMessage={
              'Your unsaved changes will be discarded. Do you wish to continue?'
            }
            submitText={'Confirm'}
          />
        </Box>
      </Fade>
    </Modal>
  );
}
