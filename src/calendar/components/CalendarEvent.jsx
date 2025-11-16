export const CalendarEvent = ({ event }) => {
  const { title, Usuario } = event;

  return (
    <>
      <strong>{title}</strong>
      <span> - {Usuario.name}</span>
    </>
  );
};
