// 1. Находим элементы в HTML и сохраняем их в переменные
const modal = document.getElementById('globalModal'); // Ищем элемент с id="modal"
const fullImage = document.getElementById('modalImage'); // Ищем картинку внутри модального окна
const closeBtn = document.getElementById('close'); // Ищем кнопку закрытия (крестик)

// 2. Функция открытия модального окна
function openModal(src) {
    modal.style.display = 'block'; // Меняем CSS-свойство display на 'block' (показываем окно)
    fullImage.src = src;      // Подставляем ссылку на полную картинку в атрибут src
}

// 3. Функция закрытия модального окна
function closeModal() {
    modal.style.display = 'none';  // Меняем CSS-свойство display на 'none' (скрываем окно)
    fullImage.src = '';            // Очищаем src, чтобы не мелькала старая картинка при следующем открытии
}

// 4. Назначаем обработчики событий (слушатели кликов)
// Когда кликаем на крестик -> вызываем closeModal
closeBtn.onclick = closeModal;

// Когда кликаем в любое место темного фона (мимо картинки) -> тоже закрываем
window.onclick = function(event) {
    if (event.target === modal) { // event.target - это элемент, по которому кликнули
        closeModal();               // Если клик был именно по фону модального окна, закрываем его
    }
};