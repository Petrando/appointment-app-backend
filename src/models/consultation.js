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
    clientId: '7z6ydcm',
    therapistId: '41m3lxk',
    dateTime: '2025-03-11T13:15:29.364Z',
    status: ConsultationStatus.Pending,
    notes: 'First meeting',
  },
  {
    id: '9j51ga1dh',
    clientId: '7z6ydcm',
    therapistId: '41m3lxk',
    dateTime: '2025-03-18T13:15:29.364Z',
    status: ConsultationStatus.Pending,
    notes: 'Second meeting',
  },
];