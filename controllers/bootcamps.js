// @desc   Get all bootcamps
// @route  GET /api/v1/bootcamps
// @access Public
exports.getBookcamps = (req, res, next) => {
    res.status(200).json({ succes: true, msg: 'Show all bootcamps' });
}

// @desc   Get single bootcamp
// @route  GET /api/v1/bootcamps/:id
// @access Public
exports.getBookcamp = (req, res, next) => {
    res.status(200).json({ succes: true, msg: `Show single bootcamp ${req.params.id}` });
}

// @desc   Create new bootcamp
// @route  POST /api/v1/bootcamps
// @access Private
exports.createBookcamp = (req, res, next) => {
    res.status(200).json({ succes: true, msg: 'Create new bootcamp' });
}

// @desc   Update bootcamp
// @route  PUT /api/v1/bootcamps/:id
// @access Private
exports.updateBookcamp = (req, res, next) => {
    res.status(200).json({ succes: true, msg: `Update bootcamp ${req.params.id}` });
}

// @desc   Delete bootcamp
// @route  DELETE /api/v1/bootcamps/:id
// @access Private
exports.deleteBookcamp = (req, res, next) => {
    res.status(200).json({ succes: true, msg: `Delete bootcamp ${req.params.id}` });
}