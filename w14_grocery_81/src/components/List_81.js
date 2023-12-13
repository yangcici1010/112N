import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

function List_81({ items, removeItem }) {
    return (
        <div className='grocery-list'>
            {items.map((item) => {
                const { id, title } = item;
                return (
                    <div className='grocery-item' key={id}>
                        <p className='title'>{title}</p>
                        <div className='btn-container'>
                            <button
                                type='button'
                                className='edit-btn'>
                                <FaEdit />
                            </button>
                            <button
                                type='button'
                                className='delete-btn'
                                onClick={() => removeItem(id)}
                            >
                                <FaTrash />
                            </button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default List_81;
