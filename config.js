const host = 'https://gank.io'

const config = {
  host,
  //最新一天
  newDay: `${host}/api/today `,
  //类型随机数据
  typeData:`${host}/api/random/data/`
}

module.exports = config