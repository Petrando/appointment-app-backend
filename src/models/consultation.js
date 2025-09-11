export const ConsultationStatus = {
  Pending : 'Pending',
  Confirmed : 'Confirmed',
  Cancelled : 'Cancelled',
  Completed : 'Completed',
}

// Added only for testing purposes
export const CONSULTATIONS = [
  {
    id: '9j5ljw1dh',
    clientId: 'clr0j6q',
    therapistId: 'sk2igl3',
    dateTime: '2026-03-11T13:15:29.364Z',
    status: ConsultationStatus.Pending,
    notes: 'First meeting',
  },
  {
    id: '9j51ga1dh',
    clientId: 'vpmwlbx',
    therapistId: 'sk2igl3',
    dateTime: '2026-03-18T13:15:29.364Z',
    status: ConsultationStatus.Pending,
    notes: 'Second meeting',
  },
];