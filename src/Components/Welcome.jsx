import React from 'react'
import './Welcome.css'
import ButtonP from './Widgets/Button'
import logo from '../img/logo-white.png'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { useHistory } from 'react-router-dom'


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    label: 'Dona comida para las personas que más lo necesitan',
  },
  {
    label: 'Ayúdanos a ayudar! tu donativo es importante ',
  },
  {
    label: 'Si necesitas alimentos, entra a nuestra app',
  },
 
];

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    backgroundColor: '#469D8B',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 80,
    marginTop: '3em',
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  

}));

const Welcome = () => {
  const history = useHistory();

  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };


    return (
        <div className='container-welcome'>
            <img src={logo} alt="logo"/>
            
        <div className={classes.root}>
            <Paper square elevation={0} className={classes.header}>
                <Typography>{tutorialSteps[activeStep].label}</Typography>
            </Paper>
            <AutoPlaySwipeableViews
             
                className="custom-carrousel"
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents>
                {tutorialSteps.map((step, index) => (
                <div key={step.label} className="custom-carrousel">
                    {Math.abs(activeStep - index) <= 2 ? (
                    <img className={classes.img} src={step.imgPath} alt={step.label} />
                    ) : null}
                </div>
                ))}
            </AutoPlaySwipeableViews>
            <MobileStepper 
             variant="dots"
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                nextButton={
                <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                    {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                </Button>
                }
                backButton={
                <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                    {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                </Button>
                }
            />
        </div>
        <div className='welcome-btn'>
        <ButtonP title='Entrar' onClick={() => history.push('/login')} />
        <ButtonP title='Registrarse' onClick={() => history.push('/signup')}/>
        </div>

        </div>
    )
}

export default Welcome
