import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs';

export const getAllContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);
    return contacts;
  } catch (error) {
    console.error('Ошибка при чтение контактов:', error);
    throw error;
  }
};

console.log(await getAllContacts());
