import React from 'react';
import {
  Box,
  Typography,
  Button,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Divider,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Drawer,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { accData } from '../data/allArray';

interface CourseFilterProps {
  filter: boolean;
}

const CourseFilter: React.FC<CourseFilterProps> = (props) => {
  return (
    <Box
      minWidth={{ md: '340px', lg: '370px' }}
      display={{ xs: 'none', md: 'block' }}
    >
      <Box>
        <Box
          display={props.filter ? 'flex' : 'none'}
          justifyContent="space-between"
          gap="20px"
          marginBottom="10px"
        >
          <Button
            variant="outlined"
            sx={{
              bgcolor: '#fff',
              borderRadius: '0px',
              color: '#000',
              borderColor: '#000',
              alignSelf: 'end',
            }}
          >
            Фильтровать
          </Button>
          <Button variant="text" sx={{ bgcolor: '#D9DCE0' }} color="info">
            Стереть всё
          </Button>
        </Box>
        <Box padding="20px" borderRadius="5px" bgcolor="#fff">
          <FormGroup>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <FormControlLabel control={<Checkbox />} label="Оффлайн" />
              <Typography variant="body2" color="initial">
                (count)
              </Typography>
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <FormControlLabel control={<Checkbox />} label="Онлайн" />
              <Typography variant="body2" color="initial">
                (count)
              </Typography>
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <FormControlLabel control={<Checkbox />} label="Бесплатно" />
              <Typography variant="body2" color="initial">
                (count)
              </Typography>
            </Box>
          </FormGroup>
          {accData.map((i) => (
            <div key={i.id}>
              <Divider />
              <Accordion disableGutters elevation={0}>
                <AccordionSummary
                  sx={{ padding: '0' }}
                  expandIcon={<ExpandMoreIcon />}
                >
                  <Typography variant="subtitle1">{i.title}</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ padding: '0' }}>
                  <FormGroup>
                    {i.data.map((item) => (
                      <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        key={item.id}
                      >
                        <FormControlLabel
                          control={<Checkbox />}
                          label={item.name}
                        />
                        <Typography variant="body2" color="initial">
                          ({item.count})
                        </Typography>
                      </Box>
                    ))}
                  </FormGroup>
                </AccordionDetails>
              </Accordion>
            </div>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default CourseFilter;

type Anchor = 'left';

export function MobileFilter() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: '250px' }}
      role="presentation"
      onClick={toggleDrawer(anchor, true)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Box>
        <Box padding="20px" bgcolor="#fff">
          <FormGroup>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <FormControlLabel control={<Checkbox />} label="Оффлайн" />
              <Typography variant="body2" color="initial">
                (count)
              </Typography>
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <FormControlLabel control={<Checkbox />} label="Онлайн" />
              <Typography variant="body2" color="initial">
                (count)
              </Typography>
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <FormControlLabel control={<Checkbox />} label="Бесплатно" />
              <Typography variant="body2" color="initial">
                (count)
              </Typography>
            </Box>
          </FormGroup>
          {accData.map((i) => (
            <div key={i.id}>
              <Divider />
              <Accordion disableGutters elevation={0}>
                <AccordionSummary
                  sx={{ padding: '0' }}
                  expandIcon={<ExpandMoreIcon />}
                >
                  <Typography variant="subtitle1">{i.title}</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ padding: '0' }}>
                  <FormGroup>
                    {i.data.map((item) => (
                      <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        key={item.id}
                      >
                        <FormControlLabel
                          control={<Checkbox />}
                          label={item.name}
                        />
                        <Typography variant="body2" color="initial">
                          ({item.count})
                        </Typography>
                      </Box>
                    ))}
                  </FormGroup>
                </AccordionDetails>
              </Accordion>
            </div>
          ))}
        </Box>
      </Box>
    </Box>
  );
  return (
    <Box>
      {(['left'] as const).map((anchor) => (
        <Box display={{ xs: 'block', md: 'none' }} key={anchor}>
          <Button
            variant="outlined"
            sx={{
              bgcolor: '#fff',
              borderRadius: '0px',
              color: '#000',
              borderColor: '#000',
              fontSize: '10px',
            }}
            onClick={toggleDrawer(anchor, true)}
          >
            Фильтровать
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </Box>
      ))}
    </Box>
  );
}
