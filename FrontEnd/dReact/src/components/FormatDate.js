// export function FormatDate(isoString: string) {
//   const date = new Date(isoString);
//   return date
//     .toLocaleDateString("en-GB", {
//       year: "numeric",
//       month: "long",
//       day: "2-digit",
//       hour: "2-digit",
//       minute: "2-digit",
//       second: "2-digit",
//       hour12: true,
//     })
//     .replace(",", "");
// }

export function formatDate(dateString) {
    // Create a new Date object from the provided date string
    const date = new Date(dateString);
  
    // List of month names
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June', 
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
  
    // Extract day, month, and time components
    const day = date.getDate();
    const month = months[date.getMonth()];
    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0'); // Ensure two digits
    const ampm = hours >= 12 ? 'PM' : 'AM';
    
    // Convert to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // The hour '0' should be '12'
  
    // Format the date and time
    return `${day} ${month} at ${hours}:${minutes} ${ampm}`;
  }
  
  // Example usage:
//   console.log(formatDate("2024-12-06T12:49:06.416234Z"));
  