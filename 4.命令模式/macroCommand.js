var closeDoorCommand = {
  execute: function () {
    console.log("关门");
  },
};
var openPcCommand = {
  execute: function () {
    console.log("开电脑");
  },
};
var openQQCommand = {
  execute: function () {
    console.log("登录 QQ");
  },
};

const MacroCommand = function () {
  return {
    commandList: [],
    add: function (command) {
      this.commandList.push(command);
    },
    execute: function () {
      for (let i = 0; i < this.commandList.length; i++) {
        this.commandList[i].execute();
      }
    },
  };
};

let macroCommand = new MacroCommand();
macroCommand.add(closeDoorCommand);
macroCommand.add(openPcCommand);
macroCommand.add(openQQCommand);
macroCommand.execute();
