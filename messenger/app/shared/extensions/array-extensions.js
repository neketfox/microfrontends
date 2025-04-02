Array.prototype.nonIgnoreLength = 0;

Array.prototype.pushWithIgnoring = function(item) {
  if (!item.isIgnoring) {
    this.nonIgnoreLength += 1
  }

  this.push(item)
}
