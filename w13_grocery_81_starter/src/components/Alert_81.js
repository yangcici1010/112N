import React, { useEffect } from 'react';

const Alert_81 = ({ msg, type, removeAlert }) => {
    useEffect(() => {
        const timeout = setTimeout(() => {
            removeAlert();
        }, 3000);

        // 返回清理函数
        return () => {
            clearTimeout(timeout);
        };
    }, []); // 空数组作为依赖，确保只在挂载和卸载时触发

    return (
        <p className={`alert alert-${type}`}>
            {msg}
        </p>
    );
};

export default Alert_81;
