
export const selectAutocomplete = (val, list) => {
  let sortedList = [];
  for (var i = 0; i < list.length; i++) {
    if (
      list[i].substr(0, val.length).toUpperCase() ==
        val.toUpperCase() ||
      list[i].toUpperCase().includes(val.toUpperCase())
    ) {
      sortedList.push(list[i]);
    }
  }
  return sortedList ?? [];
}