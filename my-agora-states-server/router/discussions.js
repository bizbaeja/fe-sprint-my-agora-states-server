// TODO: discussions 라우터를 완성합니다.
const { discussionsController } = require('../controller');
const { findAll, findById, createOne, updateById, deleteById } = discussionsController;
const express = require('express');
const router = express.Router();

router.get('/',findAll)

router.get('/:id',findById)

router.get('/',createOne)

router.get('/:id',updateById)

router.get('/:id',deleteById)


// TODO: 모든 discussion 목록을 조회하는 라우터를 작성합니다.

// TODO: discussion 하나를 조회하는 라우터를 작성합니다.

// ADVANCED: discussion 하나를 생성하는 라우터를 작성합니다.

// ADVANCED: discussion 하나를 수정하는 라우터를 작성합니다.

// ADVANCED: discussion 하나를 삭제하는 라우터를 작성합니다.

module.exports = router;
