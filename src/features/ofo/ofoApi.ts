// A mock function to mimic making an async request for data
import ofo1 from './ofoData/ofo_1.json';
import ofo2 from './ofoData/ofo_2.json';
import ofo3 from './ofoData/ofo_3.json';
import ofo4 from './ofoData/ofo_4.json';
import ofo5 from './ofoData/ofo_5.json';
import ofo6 from './ofoData/ofo_6_specialisation.json';
import descriptor from './ofoData/ofo_7_descriptor.json';
import task from './ofoData/ofo_7_task.json';
import alternativeTitle from './ofoData/ofo_9_alternativeTitle.json';
import { occupationInterface } from './ofoSlice';

export function fetchOfo(id: string = '') {
    return new Promise<{ data: occupationInterface[] }>((resolve) => {
        let data = [];

        setTimeout(() => {
            switch (id.length) {
                case 0:
                    return resolve({
                        data: ofo1.map((item: any) => ({
                            ...item,
                            descriptor: getDescriptor(item.code),
                        })),
                    });
                case 1:
                    return resolve({
                        data: ofo2
                            .filter((item: any) => item.code.indexOf(id) === 0)
                            .map((item: any) => ({
                                ...item,
                                descriptor: getDescriptor(item.code),
                            })),
                    });
                case 2:
                    return resolve({
                        data: ofo3
                            .filter((item: any) => item.code.indexOf(id) === 0)
                            .map((item: any) => ({
                                ...item,
                                descriptor: getDescriptor(item.code),
                            })),
                    });
                case 3:
                    return resolve({
                        data: ofo4
                            .filter((item: any) => item.code.indexOf(id) === 0)
                            .map((item: any) => ({
                                ...item,
                                descriptor: getDescriptor(item.code),
                            })),
                    });
                case 4:
                    return resolve({
                        data: ofo5
                            .filter((item: any) => item.code.indexOf(id) === 0)
                            .map((item: any) => ({
                                ...item,
                                descriptor: getDescriptor(item.code),
                            })),
                    });
            }
        }, 50);
    });
}

const getDescriptor = (code: string) => {
    const [result] = descriptor.filter((item: any) => item.code === code);
    return result?.descriptor;
};

const mergeOfo = () => {
    let level1: any, level2: any, level3: any, level4: any, level5: any;
    level1 = ofo1.map((item: any) => {
        const code = item.code;
        level2 = ofo2
            .filter((item: any) => item.code.indexOf(code) === 0)
            .map((item: any) => {
                level3 = ofo3
                    .filter((item: any) => item.code.indexOf(code) === 0)
                    .map((item: any) => {
                        level4 = ofo4
                            .filter(
                                (item: any) => item.code.indexOf(code) === 0
                            )
                            .map((item: any) => {
                                level5 = ofo5.filter(
                                    (item: any) => item.code.indexOf(code) === 0
                                );

                                return { ...item, occupations: level5 };
                            });
                        return {
                            ...item,
                            occupations: level4,
                            descriptor: getDescriptor(item.code),
                        };
                    });
                return {
                    ...item,
                    occupations: level3,
                    descriptor: getDescriptor(item.code),
                };
            });
        return {
            ...item,
            occupations: level2,
            descriptor: getDescriptor(item.code),
        };
    });

    return level1;
};
