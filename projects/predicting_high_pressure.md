---
layout: page
title: Predicting High-Pressure Liquid Densities
subtitle: Research Project — Technische Universität Hamburg (TUHH)
permalink: /projects/predicting_high_pressure/
---

# Predicting High-Pressure Liquid Densities Using the Tait Equation & Phonon Theory

**Research Project — Technische Universität Hamburg (TUHH)**

A computational study combining the Tait Equation and Murnaghan's Equation to predict liquid densities at ultra-high pressures (up to the gigapascal range), where conventional equations of state break down.

---

## Motivation

Most existing equations of state lose accuracy when predicting liquid densities at very high pressures. This project develops and validates a combined Tait–Murnaghan approach that requires only ambient-condition properties — density, speed of sound, and isothermal compressibility — to predict densities across a wide pressure and temperature range.

![Methodology Chart]({{ '/assets/img/projects/Density_Pred_Methodology_chart.jpg' | relative_url }})

## Approach

1. **Validation against experiments:** The combined equation was benchmarked against published high-pressure density data for hydrocarbons and organics, showing close agreement.

2. **Extending to more compounds:** The TREND Equation of State package was first validated against experimental speed-of-sound data, then used to generate reference density isotherms and ambient-condition properties for a broader set of fluids.

3. **Determining the *K* parameter:** Ambient speed of sound, density, and isothermal compressibility were used in a linear regression to extract the material constant *K*, which governs the pressure–density relationship. Predicted densities were assessed via Average Absolute Deviation (AAD) and Average Relative Deviation (%ARD).

4. **Phase-boundary handling:** At high temperatures and low pressures, liquid–vapor transitions limited the available data. The vapor pressure curve was used to constrain conditions to the liquid phase, and non-linear regression improved data quality for the linear fit.

5. **Curve fitting for refined *K*:** A curve-fitting routine matched predicted density isotherms to TREND reference data, with the linear-regression *K* as the initial guess — significantly reducing %AAD.

## Key Results

| Compound | *K* (fitted) | AAD % | %ARD |
|---|---|---|---|
| Undecane (C₁₁) | 9.728 | 0.332 | 0.303 |
| Acetone | 9.728 | 0.613 | 0.176 |
| Benzene | 9.728 | 0.096 | 0.036 |

- *K* values across all tested compounds fall between 7 and 11; a universal constant of ~9.73 still yields reasonable predictions.
- *K* correlates positively with molecular weight and critical temperature, negatively with critical pressure; acentric factor shows little influence.
- Inverse isothermal compressibility vs. inverse temperature is approximately linear for low-pressure fluids, enabling a predictive model using only SMILES-derived molecular descriptors (via RDKit).

## Tools & Methods

- **TREND EOS** — reference equation of state for generating high-pressure property data
- **Python** — regression, curve fitting, data pipeline, molecular descriptor calculation
- **RDKit** — chemical descriptors from SMILES for predicting isothermal compressibility
- **Linear & non-linear regression** — parameter estimation for *K* and compressibility models

## Challenges & Future Work

- Significant deviations were observed for some high-pressure fluids, partly due to clustering in molecular-weight data affecting regression coefficients.
- High-pressure fluids that deviate from the linear inverse-compressibility trend required a separate non-linear model.
- Future improvements include feature selection via correlation analysis to identify the most relevant RDKit descriptors, and exploring volume-translated EOS approaches for compressibility prediction.
