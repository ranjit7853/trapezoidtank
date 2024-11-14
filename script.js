function CalculateVolumes() {
  // Get the input values
  const b1 = parseFloat(document.getElementById("basewidth").value);
  const b2 = parseFloat(document.getElementById("topwidth").value);
  const h = parseFloat(document.getElementById("totalheight").value);
  const l = parseFloat(document.getElementById("tanklength").value);
  const h1 = parseFloat(document.getElementById("liquidheight").value);
  const density = parseFloat(document.getElementById("fluiddensity").value);

  // Validate input values
  if (
    isNaN(b1) ||
    isNaN(b2) ||
    isNaN(h) ||
    isNaN(l) ||
    isNaN(h1) ||
    isNaN(density)
  ) {
    alert("Please enter valid numeric values for all inputs.");
    return;
  }

  if (b1 > b2) {
    alert("Width of the base is smaller than width of top.");
    return;
  }
  if (h1 > h) {
    alert("Liquid Level Value Can't be greater than Height of tank.");
    return;
  }

  if (l <= 0) {
    alert("Length of the tank must be greater than 0.");
    return;
  }

  //start Calculating
  const Volumeoftank = (l * (b1 + b2) * h) / 2; // Cm
  const VolTankbarrel = Volumeoftank * 8.3864;
  const A = 2 * b1;
  const B = b2 - b1;
  const C = h1 / h;
  const D = h1 / 2;
  const Area = (A + B * C) * D;
  const VolLiqM3 = l * Area;
  const VolLiqBarrel = VolLiqM3 * 8.3864;
  const WtLiqKgs = VolLiqM3 * density * 1000;
  const LiqVolPercent = (VolLiqM3 / Volumeoftank) * 100;
  document.getElementById("result").innerHTML = `
    <strong>Capacity of the Tank: ${Volumeoftank.toFixed(
      1
    )} Cu.Meter</strong><br>

    <strong>Capacity of the Tank: ${VolTankbarrel.toFixed(
      1
    )} Barrels</strong><br>
    
    <strong>Volume of the Liquid Present: ${VolLiqM3.toFixed(
      1
    )} Cu.Meter</strong><br>

    <strong>Volume of the Liquid Present: ${VolLiqBarrel.toFixed(
      1
    )} Barrels</strong><br>
    
    <strong>Weight of the Liquid Present: ${WtLiqKgs.toFixed(
      1
    )} Kgs</strong><br>

    <strong>Vol occupied by Liquid: ${LiqVolPercent.toFixed(1)} %</strong><br>
  `;
}
