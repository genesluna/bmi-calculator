import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import CalculateIcon from "@mui/icons-material/Calculate";
import RefreshIcon from "@mui/icons-material/Refresh";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import underWeight from "../../assets/underWeight.webp";
import normalWeight from "../../assets/normalWeight.webp";
import overWeight from "../../assets/overWeight.webp";
import obese from "../../assets/obese.webp";
import morbidObese from "../../assets/morbidObese.webp";
import glass from "../../assets/glass.webp";
import bottle from "../../assets/bottle.webp";

export default function BMICalculator() {
  const [userHeightError, setUserHeightError] = useState(false);
  const [userHeightMessage, setUserHeightMessage] = useState("");
  const [userWeightError, setUserWeightError] = useState(false);
  const [userWeightMessage, setUserWeightMessage] = useState("");
  const [userAgeError, setUserAgeError] = useState(false);
  const [userAgeMessage, setUserAgeMessage] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [imageSrc, setImageSrc] = useState("");
  const [height, setHeight] = useState("");
  const [waterConsumption, setWaterConsumption] = useState(0);
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [bmiMessage, setBmiMessage] = useState("");
  const [bmi, setBmi] = useState("");

  let calcBmi = () => {
    let HeightInMeters = parseInt(height) / 100;
    let bmi = parseInt(weight) / Math.pow(HeightInMeters, 2);
    setBmi("Seu IMC é: " + bmi.toFixed(1));

    switch (true) {
      case bmi <= 18.5:
        setBmiMessage("Abaixo do peso ideal");
        setImageSrc(underWeight);
        break;

      case bmi > 18.5 && bmi < 25:
        setBmiMessage("Peso ideal");
        setImageSrc(normalWeight);
        break;

      case bmi >= 25 && bmi < 30:
        setBmiMessage("Acima do peso ideal");
        setImageSrc(overWeight);
        break;

      case bmi >= 30 && bmi < 40:
        setBmiMessage("Você tem obesidade");
        setImageSrc(obese);
        break;

      case bmi >= 40:
        setBmiMessage("Você tem obesidade mórbida");
        setImageSrc(morbidObese);
        break;

      default:
        break;
    }
  };

  let calcDwi = () => {
    switch (true) {
      case age >= 1 && age <= 17:
        setWaterConsumption(weight * 40);
        break;

      case age > 17 && age <= 55:
        setWaterConsumption(weight * 35);
        break;

      case age > 55 && age <= 65:
        setWaterConsumption(weight * 30);
        break;

      case age > 65:
        setWaterConsumption(weight * 25);
        break;

      default:
        break;
    }
  };

  let handleCalculations = () => {
    if (isFormValid()) {
      calcBmi();
      calcDwi();
      setShowResults(true);
    }
  };

  let isFormValid = () => {
    let success = true;

    refreshFormErrors();

    if (height === "") {
      setUserHeightError(true);
      setUserHeightMessage("O preenchimento desse campo é obrigatório");
      success = false;
    } else if (height === "0") {
      setUserHeightError(true);
      setUserHeightMessage("O valor não pode ser zero");
      success = false;
    } else if (height < 0) {
      setUserHeightError(true);
      setUserHeightMessage("O valor não pode ser negativo");
      success = false;
    }

    if (weight === "") {
      setUserWeightError(true);
      setUserWeightMessage("O preenchimento desse campo é obrigatório");
      success = false;
    } else if (weight === "0") {
      setUserWeightError(true);
      setUserWeightMessage("O valor não pode ser zero");
      success = false;
    } else if (weight < 0) {
      setUserWeightError(true);
      setUserWeightMessage("O valor não pode ser negativo");
      success = false;
    }

    if (age === "") {
      setUserAgeError(true);
      setUserAgeMessage("O preenchimento desse campo é obrigatório");
      success = false;
    } else if (age === "0") {
      setUserAgeError(true);
      setUserAgeMessage("O valor não pode ser zero");
      success = false;
    } else if (age < 0) {
      setUserAgeError(true);
      setUserAgeMessage("O valor não pode ser negativo");
      success = false;
    }

    return success;
  };

  let refresh = () => {
    setHeight("");
    setWeight("");
    setBmi("");
    setBmiMessage("");
    setImageSrc("");
    setShowResults(false);
  };

  let refreshFormErrors = () => {
    setUserHeightError(false);
    setUserHeightMessage("");
    setUserWeightError(false);
    setUserWeightMessage("");
    setUserAgeError(false);
    setUserAgeMessage("");
  };

  return (
    <Paper elevation={3} sx={{ padding: 3 }}>
      <h3 style={{ textAlign: "center", color: "rgb(33,138,174)" }}>
        Preencha os campos
      </h3>

      <Stack sx={{ marginTop: 4 }} spacing={2}>
        <TextField
          error={userAgeError}
          required
          id="userAge"
          label="Idade (anos)"
          variant="standard"
          fullWidth
          onChange={(e) => setAge(e.target.value)}
          type="number"
          value={age}
          helperText={userAgeMessage}
        />

        <TextField
          error={userHeightError}
          required
          id="userHeight"
          label="Altura (cm)"
          variant="standard"
          fullWidth
          onChange={(e) => setHeight(e.target.value)}
          type="number"
          value={height}
          helperText={userHeightMessage}
        />

        <TextField
          error={userWeightError}
          required
          id="userWeight"
          label="Peso (kg)"
          variant="standard"
          fullWidth
          onChange={(e) => setWeight(e.target.value)}
          type="number"
          value={weight}
          helperText={userWeightMessage}
        />
      </Stack>

      {showResults && (
        <Grid
          container
          spacing={3}
          sx={{
            textAlign: "center",
            paddingY: 2,
            marginY: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid item xs={12} sm={6}>
            <Paper elevation={3} sx={{ padding: 3 }}>
              <h4 style={{ color: "rgb(33,138,174)" }}>{bmi}</h4>
              <img
                src={imageSrc}
                alt="imcImage"
                height={128}
                width={128}
                style={{ margin: "1em" }}
              />
              <h5 style={{ color: "rgb(33,138,174)" }}>{bmiMessage}</h5>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Paper elevation={3} sx={{ padding: 3 }}>
              <h4 style={{ color: "rgb(33,138,174)" }}>Você deve consumir</h4>
              <h2 style={{ color: "rgb(33,138,174)", marginTop: ".2em" }}>
                {" "}
                {(waterConsumption / 1000).toFixed(2)}{" "}
              </h2>
              <h6 style={{ color: "rgb(33,138,174)", marginTop: ".5em" }}>
                litros de água por dia
              </h6>

              <Grid container spacing={2} sx={{ marginTop: ".8em" }}>
                <Grid item xs={12} sm={6}>
                  <img src={bottle} alt="bottle" height={64} width={64} />
                  <h6 style={{ color: "rgb(33,138,174)", marginTop: ".5em" }}>
                    {Math.round(waterConsumption / 500).toFixed(0)} garrafinhas
                    de 500ml
                  </h6>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <img src={glass} alt="glass" height={64} width={64} />
                  <h6 style={{ color: "rgb(33,138,174)", marginTop: ".5em" }}>
                    {Math.round(waterConsumption / 310).toFixed(0)} copos de
                    310ml
                  </h6>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      )}

      <Box sx={{ marginTop: 3, textAlign: "right" }}>
        {showResults && (
          <Button
            variant="outlined"
            startIcon={<RefreshIcon />}
            sx={{ color: "rgb(33, 138, 174)", marginRight: 1 }}
            onClick={refresh}
          >
            Limpar
          </Button>
        )}

        <Button
          variant="outlined"
          startIcon={<CalculateIcon />}
          sx={{ color: "rgb(33, 138, 174)" }}
          onClick={handleCalculations}
        >
          Calcular
        </Button>
      </Box>
    </Paper>
  );
}
