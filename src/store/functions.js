module.exports = {
  sortByDate: entity => entity.sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime())
};
