---
layout: page
title: Green Methanol Production
subtitle: 3rd Place — EURECHA Process Design Contest 2025
permalink: /projects/green_methanol/
---

# Green Methanol Production from Excess Renewable Electricity

**🏆 3rd Place — EURECHA Process Design Contest 2025**

This project was developed as part of the [EURECHA](https://www.eurecha.org/) (European Committee for the Use of Computers in Chemical Engineering Education) international student process design contest 2025. Our team (SAIA Group, Technische Universität Hamburg) was awarded **third place internationally**.

A techno-economic design study for a 20,000 t/year green methanol plant that converts captured CO₂ and green H₂ using surplus renewable electricity in Antwerp, Belgium.

![Green Methanol Process]({{ '/assets/img/projects/Green_Methanol_Process.jpg' | relative_url }})

---

## Concept

The plant hydrogenates CO₂ to methanol via a Cu/Zn/Al/Zr catalyst at 250 °C and 65 bar. It is designed for **discontinuous operation** — an electrolyzer runs only when spot electricity prices fall below a threshold (≤ 50 €/MWh), and a 50-tonne H₂ buffer tank decouples hydrogen production from the continuously running methanol synthesis loop.

## Process Highlights

- **Reactor:** Isothermal multi-tube plug-flow reactor (420 tubes, 450 kg catalyst, LHHW kinetics) modeled in Aspen Plus with SRK thermodynamics
- **Separation:** Two-stage flash → 47-stage RadFrac distillation (99.5 % methanol purity)
- **H₂ Recovery Membrane:** Polymeric membrane (103 m², stage cut 0.9) reduces H₂ loss from ~24 % to ~1.4 %, modeled with a custom Python simulation using Peng-Robinson EOS
- **Energy-Integrated Distillation:** Closed-cycle heat pump screening (26 alternatives) cuts column energy demand by up to 82 % (1.83 MW → 0.33 MW)
- **Waste Heat Recovery:** Multi-step steam generation + ORC (pentane working fluid) for electricity, with residual heat routed to district heating

## Key Results

| Metric | Value |
|---|---|
| Production capacity | 20,000 t methanol / year |
| Electrolyzer capacity | 100 MW PEM |
| Reactor yield | 0.25 (single pass) |
| H₂ utilization (with membrane) | 98.6 % |
| CO₂ utilization (with membrane) | 86.2 % |
| Total CAPEX | ~101.7 M€ |
| Levelized Cost of Methanol (LCoM) | 1,517 €/t |
| LCoM under optimistic scenario | ~600 €/t |

## Tools & Methods

- **Aspen Plus** — steady-state process simulation (SRK, RPlug, RadFrac, DSTWU)
- **Python** — membrane transport model, dynamic H₂ buffer simulation, ORC analysis
- **Distillation Screening Tool** — MED calculation via rectification body method, VRC & EHP evaluation
- **Cost Estimation** — equipment cost correlations (Towler & Sinnott), CEPCI escalation, discounted cash flow → LCoM

## Team

Hardik Mhatre · Dennis Espert · Maik-Alexander Sauck · Kaspar Eucken · Kevin Emmanuel Lienou Ngomsu 

## Code

Source code available at: [github.com/MaikSa2/EURECHA_challenge](https://github.com/MaikSa2/EURECHA_challenge)
