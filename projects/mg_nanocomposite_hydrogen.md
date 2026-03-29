---
layout: page
title: Mg-Based Metal Hydride Kinetics
subtitle: Research Internship — Indian Institute of Technology Bombay
permalink: /projects/mg_nanocomposite_hydrogen/
---

# Reaction Kinetics of Mg-Based Nanocomposite Metal Hydrides for Hydrogen Storage

**Summer Research Internship 2023 — Indian Institute of Technology Bombay**
Department of Energy Science and Engineering | Supervisor: Prof. Sankara Sarma V. Tatiparti

---

## Overview

This project investigated the hydrogenation and dehydrogenation kinetics of magnesium-based metal hydride nanocomposites — a promising class of materials for solid-state hydrogen storage. The work combined experimental synthesis and characterization with computational kinetic analysis to challenge the common assumption that these reactions follow simple first-order kinetics.

## Experimental Work

### Material Synthesis

Several Mg-based nanocomposites were synthesized via high-energy ball milling, incorporating different catalytic additives to study their effect on hydrogen absorption/desorption performance:

- **Graphene-based composites** — Mg–trGO (thermally reduced graphene oxide) and Mg–erGO (electrochemically reduced graphene oxide), synthesized using thermal exfoliation and electrolysis methods respectively
- **Nickel-catalyzed composites** — Mg–Ni nanocomposites to evaluate the catalytic effect of nickel on H₂ kinetics
- **Combined systems** — Mg–Ni–erGO composites combining both nickel and graphene-based catalysts
- **MXene-based composites** — Mg–MXene nanocomposites to explore the effect of 2D transition metal carbides on hydrogenation/dehydrogenation behavior

### Hydrogenation & Dehydrogenation Experiments

All experiments were performed using a Sievert-type volumetric apparatus under controlled conditions. Isothermal hydrogen absorption was carried out at 320 °C and 15 bar H₂ pressure. Dehydrogenation was studied both isothermally (320 °C with periodic evacuation) and non-isothermally (ramp to 450 °C under vacuum at 5 °C/min). Pressure transducer voltage data was converted to moles of H₂ absorbed/desorbed via calibration equations and the ideal gas law.

<div style="display: flex; justify-content: space-around; margin: 2rem 0;">
  <img src="{{ '/assets/img/projects/Sievert apparatus_1.jpg' | relative_url }}" alt="Sievert Apparatus 1" style="width: 45%; border-radius: 8px;">
  <img src="{{ '/assets/img/projects/Sievert apparatus_2.jpg' | relative_url }}" alt="Sievert Apparatus 2" style="width: 45%; border-radius: 8px;">
</div>

## Kinetic Analysis Methods

Three progressively refined approaches were used to determine reaction order (*n*) and rate constant (*k*):

1. **Initial rate method** — Raw concentration data was smoothed (FFT filtering), reduced, and differentiated to obtain rate profiles. A log(rate) vs. log(concentration) plot yielded *n* and *k* as first estimates via linear fitting.

2. **Non-linear regression (NLR)** — Using the initial rate estimates as starting values, the model r = k·Cⁿ was fitted to experimental rate data by minimizing the mean squared error. Optimal *n* and *k* were validated by solving the resulting ODE (via Python's `odeint`) and comparing predicted vs. experimental concentration profiles (R² assessment).

3. **Piecewise NLR** — The concentration profile was segmented into variable-length windows (200–600 s), and NLR was performed independently on each segment. This revealed how *n* and *k* evolve over the course of the reaction — across incubation, growth, and diffusion phases.

## Key Findings

| System | Phase | *n* | *k* |
|---|---|---|---|
| Mg–trGO (hydrogenation) | Growth | 1.375 | 1.39×10⁻⁴ |
| Mg–trGO (hydrogenation) | Diffusion | 4.771 | 1.15×10⁴ |
| Mg–erGO (dehydrogenation) | Growth | 0.337 | 1.43×10⁻³ |
| Mg–Ni–erGO (dehydrogenation) | Growth | 0.337 | 1.50×10⁻² |
| Mg–Ni (dehydrogenation) | Growth | 0.459 | 1.39×10⁻² |

- The reaction order is **not unity** as commonly assumed — it varies between phases and can be fractional, greater than one, or even negative during incubation.
- Piecewise analysis revealed that hydrogenation/dehydrogenation is a **multi-order process**: *n* increases as conversion progresses while *k* remains relatively constant in the growth region.
- Nickel-catalyzed composites (Mg–Ni, Mg–Ni–erGO) showed significantly higher rate constants compared to graphene-only composites, confirming nickel's strong catalytic effect on dehydrogenation kinetics.

## Tools

- **Sievert apparatus** — volumetric H₂ absorption/desorption measurements
- **Ball milling** — nanocomposite synthesis
- **Python** — FFT filtering, data reduction, NLR optimization, ODE solving (`odeint`), piecewise segmentation
- **OriginPro** — data smoothing and visualization
- **Excel Solver** — initial NLR parameter estimation
