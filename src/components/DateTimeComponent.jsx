function Clock(time) {
  const [Value, setValue] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setValue(new Date());
    }, 1000); // Update every second

    return () => {
      clearInterval(interval); // Cleanup interval on unmount
    };
  }, []);

  const formatDate = (date) => {
    // Format date as desired (e.g., "Wed Jul 07 2024")
    return date.toDateString();
  };

  const formatTime = (date) => {
    // Format time as desired (e.g., "14:30:00")
    return date.toLocaleTimeString();
  };
}

export default DateTimeComponent;
