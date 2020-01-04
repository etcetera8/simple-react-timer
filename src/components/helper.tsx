const secondsSinceDate = (startDate: Date | null | number, seconds: number | null): number => {
    if (!seconds) {
      const todaysDate = new Date(new Date().toISOString());
      if (startDate) {
        const timeStart = new Date(startDate);
        const difference = Math.abs(timeStart.getTime() - todaysDate.getTime());
        return difference;
      }
    } else {
      return seconds * 1000;
    }
    return 0;
  }

  export default secondsSinceDate;