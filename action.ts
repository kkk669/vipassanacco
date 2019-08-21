class Action {
    name: string
    startTime: Date
  
    constructor(name: string, startTimeHour: number, startTimeMinute: number) {
      this.name = name
      let now = new Date()
      this.startTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), startTimeHour, startTimeMinute)
    }
  }
  
  
  class ActionList {
    actions: Array<Action>
  
    constructor() {
      this.actions = []
    }
  
    pushAction(action: Action): void {
      this.actions.push(action)
    }
  
    getAction(): Action {
      let result = this.actions[0]
      this.actions = this.actions.splice(1, this.actions.length)
      return result
    }
  
    getLength(): number {
      return this.actions.length
    }
  }
  
  
  // デフォルト値を設定
  function getSampleActions(): ActionList {
    let resultList = new ActionList()
    resultList.pushAction(
      new Action(
        '起床',
        4,
        0,
      )
    )
    resultList.pushAction(
      new Action(
        '瞑想',
        4,
        30,
      )
    )
    resultList.pushAction(
      new Action(
        '朝食・休憩',
        6,
        30,
      )
    )
    resultList.pushAction(
      new Action(
        '瞑想',
        8,
        0,
      )
    )
    resultList.pushAction(
      new Action(
        '瞑想',
        9,
        0,
      )
    )
    resultList.pushAction(
      new Action(
        '昼食',
        11,
        0,
      )
    )
    resultList.pushAction(
      new Action(
        '休憩',
        12,
        0,
      )
    )
    resultList.pushAction(
      new Action(
        '瞑想',
        13,
        0,
      )
    )
    resultList.pushAction(
      new Action(
        '瞑想',
        14,
        30,
      )
    )
    resultList.pushAction(
      new Action(
        '瞑想',
        15,
        30,
      )
    )
    resultList.pushAction(
      new Action(
        'ティータイム',
        17,
        0,
      )
    )
    resultList.pushAction(
      new Action(
        '瞑想',
        18,
        0,
      )
    )
    resultList.pushAction(
      new Action(
        '講話',
        19,
        0,
      )
    )
    resultList.pushAction(
      new Action(
        '質問',
        21,
        0,
      )
    )
    resultList.pushAction(
      new Action(
        '就寝',
        21,
        30,
      )
    )
    return resultList;
}
