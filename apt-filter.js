//Only start playing with this file if you're done with all the basics

const must = (radio) => radio.filter((rb) => rb.checked).length;

const findRelevantApts = function (
  address,
  minPrice,
  maxPrice,
  minRooms,
  maxRooms,
  immediate,
  park
) {
  let relevantApts = apartments.filter(
    (a) =>
      a.address.toLowerCase().includes(address.toLowerCase() || "") &&
      a.price >= (minPrice || 0) &&
      a.price <= (maxPrice || a.price) &&
      a.rooms >= (minRooms || 0) &&
      a.rooms <= (maxRooms || a.rooms)
  );
  parking = park[0].checked;
  if (parking) {
    relevantApts = relevantApts.filter((a) => a.parking);
  }
  immediate = !immediate[0].checked;
  return immediate ? relevantApts : relevantApts.filter((a) => a.immediate);
};
