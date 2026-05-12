
/* ============================================
   EDI4 HEALTH & SAFETY KIOSK — APPLICATION LOGIC
   ============================================ */

// ============================================
// DATA: Risk Assessments from EDI4 files
// ============================================
const riskAssessments = [
    {
        id: 'EDI4-0006',
        title: 'Manual Pump Truck',
        version: 'V4',
        department: 'Inbound / All Floors',
        equipment: 'Manual Pump Truck',
        riskLevel: 'substantial',
        maxScore: 9,
        reviewDate: '03/09/2025',
        participants: 'Joanna Wiles (WHSM), Niall McNab (AM), Cameron Smith (WHST)',
        hazards: [
            { name: 'Working at height / falling from trailers', category: 'Gravity_Access', risk: 'Broken bones, head concussion, death', controls: 'Chain railings on trailer edge; roll-up door closed until air trailer positioned; 2-inch positioning requirement', score: 9, level: 'high' },
            { name: 'Manual handling — excessive force', category: 'Ergonomic', risk: 'Musculoskeletal injury, back strain', controls: 'Max pallet weight 500kg; max height 1.6m; mandatory pump truck training; annual refreshers', score: 6, level: 'med' },
            { name: 'Slippery surfaces / spills', category: 'Ergonomic', risk: 'Slips, trips, sprains', controls: 'Spill kits available; hazmat-trained staff; 70+ housekeeping audits weekly; safety shoes PPE', score: 3, level: 'low' },
            { name: 'Struck by — collision with pedestrians', category: 'Equipment_Mechanical', risk: 'Impact injuries, crushing', controls: 'Dome mirrors; designated walkways; hi-viz PPE; 150+ safe handling audits per team lead weekly', score: 6, level: 'med' },
            { name: 'Struck by — falling loads', category: 'Equipment_Mechanical', risk: 'Head/body impact injuries', controls: 'Pallet height restriction 1.6m; shrink wrap requirement; load stability checks', score: 4, level: 'low' },
            { name: 'Damaged equipment', category: 'Equipment_Mechanical', risk: 'Strain, entrapment', controls: 'Red-tag system; pre-use inspection; quarterly RME maintenance', score: 3, level: 'low' },
            { name: 'Repetitive movement', category: 'Ergonomic', risk: 'WRULD, chronic pain', controls: 'Job rotation; max 5hr unloading per shift; RSG training; WorkingWell programme', score: 4, level: 'low' }
        ]
    },
    {
        id: 'EDI4-0001',
        title: 'Counterbalance Fork Lift Truck (Electric)',
        version: 'Issue 2',
        department: 'Yard / Dock',
        equipment: 'Counterbalance FLT',
        riskLevel: 'medium',
        maxScore: 6,
        reviewDate: '12/07/2024',
        participants: 'Robin Monk (H&S Consultant), Euan McIlvean (Operator)',
        hazards: [
            { name: 'Entanglement with moving parts', category: 'Equipment_Mechanical', risk: 'Death from entanglement in chain mast', controls: 'No loose clothing; trained operators; pre-use inspection; supervision', score: 5, level: 'med' },
            { name: 'Struck by / impact injuries', category: 'Equipment_Mechanical', risk: 'Impact/cutting from falling materials or rollover', controls: 'Licensed operators only; appropriate surfaces; load secured; qualified servicing', score: 6, level: 'med' },
            { name: 'Pedestrian/FLT interaction — crushing', category: 'Equipment_Mechanical', risk: 'Person trapped between FLT and object', controls: 'Traffic management; licensed operators; seatbelt; load secured', score: 6, level: 'med' },
            { name: 'Repetitive movement / MSD', category: 'Ergonomic', risk: 'Musculoskeletal injury from extended operation', controls: 'Max 50 hrs/week PIT policy; fit-to-drive policy; trained operators', score: 4, level: 'low' },
            { name: 'Slip/trip/fall accessing FLT', category: 'Gravity_Access', risk: 'Significant injuries from slip/fall', controls: 'Slip-resistant footwear; 3 points of contact; good housekeeping', score: 6, level: 'med' },
            { name: 'FLT/Pedestrian interaction', category: 'Motorized_Vehicle', risk: 'Struck by/crushing injuries', controls: 'Designated pedestrian paths; hi-vis; dead man\'s control; seatbelt; reversing alarm; traffic management plan', score: 6, level: 'med' }
        ]
    },
    {
        id: 'EDI4-0002',
        title: 'Welfare Facilities',
        version: 'V1',
        department: 'Facilities / All Areas',
        equipment: 'MOD Trailer, Prayer Room, Toilets, Mothers Room',
        riskLevel: 'substantial',
        maxScore: 9,
        reviewDate: '24/05/2025',
        participants: 'Sharon Cunningham (WHS), Stephen Russell (OM)',
        hazards: [
            { name: 'MOD Trailer — fall from height during unloading', category: 'Gravity_Access', risk: 'Broken bones, head concussion', controls: 'Roll-up door closed until air trailer positioned; 2-inch positioning requirement; proposed chain railing', score: 9, level: 'high' },
            { name: 'Prayer Room — wet feet causing slip', category: 'Water', risk: 'Sprains, bruising, broken bones', controls: 'Blue roll for drying; non-slip flooring; Mitie cleaning schedule', score: 4, level: 'low' },
            { name: 'Prayer Room — water spill on floor', category: 'Water', risk: 'Strains, sprains, broken bones', controls: 'Non-slip flooring in wet areas; safety signage; immediate cleanup; routine inspections', score: 4, level: 'low' }
        ]
    }
];

