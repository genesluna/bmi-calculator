import './App.css';
import BMICalculator from './components/BMICalculator/BMICalculator';
import TitleAppBar from './components/TitleAppBar/TitleAppBar';
import Container from '@mui/material/Container';

export default function App() {
  return (
    <div>
      <TitleAppBar/>
      <Container maxWidth = "sm" sx = {{ marginY: 5 }}>
        <BMICalculator/>
      </Container>
    </div>
  );
}