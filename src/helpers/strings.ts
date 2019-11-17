import lodash from 'lodash';
import format from 'string-template';

export function __(key: string, data?: any) {
    const source = lodash.get(strings, key, '');
    return format(source, data);
}

export const strings = {
    referral: {
        wrongToken: `Привет!
Прости, но кажется у тебя битая ссылка. Попроси ссылочку ещё раз и попробуй снова!`,

        overcrowded: `Привет!
Прости, но команда {team} уже имеет полный состав - {count} человек.
Ты можешь попросить администратора увеличить состав команды.`,

        greeting: `
Привет!
Для того, чтобы войти в команду {team} укажи свои имя и фамилию:`,
        final: `Как прикажете, ваше превосходительство, {name}. 😁
Теперь ты в команде {team}!`,
        doubt: `
Прости, я сомневаюсь, что тебя так зовут. Попробуй ещё раз.`,
        restricted: `Ю шел нот пас!.. пока не скажешь как тебя звоут`
    },
    main: {
        enter: `
Твоя команда - {team}
Вы сдали документы: {docs}
/doc - можешь загрузить новые документы, или перезагрузить старые`
    }
};
