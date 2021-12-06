var dayjs = require('dayjs')
require('dayjs/locale/es-mx')
dayjs.locale('es-mx')

export const formatD = (date) => {
    return dayjs(date).format('DD/MM/YY hh:mm a')
}