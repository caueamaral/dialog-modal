const $modal = document.querySelector('.js-modal')
const $open = document.querySelector('.js-modal-open')
const $close = document.querySelector('.js-modal-close')

const open = () => $modal.showModal()
const close = () => $modal.close()

$open.addEventListener('click', open)
$close.addEventListener('click', close)