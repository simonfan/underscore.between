define(["underscore"], function(undef) {
    function exclusiveBetween(boundaries, item) {
        return boundaries[0] < item && item < boundaries[1];
    }

    function inclusiveBetween(boundaries, item) {
        return boundaries[0] <= item && item <= boundaries[1];
    }

	_.mixin({
        between: function(boundaries, item, exclusive) {
            // determine which operator to use.
            var operator = exclusive ? exclusiveBetween : inclusiveBetween;

            // curry operator
            operator = _.partial(operator, boundaries);

            return _.isArray(item) ? _.every(item, operator) : operator(item);
        }
    });
});
