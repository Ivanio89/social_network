export const updateObjectInArray = (
  items,
  itemId,
  objPropName,
  newObjectProps
) => {
  console.log(items);
  console.log(newObjectProps);
  return items.map((user) => {
    if (user[objPropName] === itemId) {
      return { ...user, ...newObjectProps };
    }
    return user;
  });
};
