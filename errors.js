import { capitalize } from './tests';

if (capitalize('hello') !== 'Hello') { // Если результат функции не равен ожидаемому значению
                                       // Выбрасываем исключение и завершаем выполнение теста
    throw new Error('Функция работает неверно!');
}