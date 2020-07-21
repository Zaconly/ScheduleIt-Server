import c from "chalk"

type LoggerType = "INFO" | "WARNING" | "ERROR" | "CRON"

export const logger = (message: string, type?: LoggerType): void => {
  const dateFormat = `[${new Date().toLocaleString()}] `

  switch (type) {
    case "WARNING":
      console.warn(c.yellowBright(`WARN ${dateFormat}`) + message)
      break
    case "ERROR":
      console.error(c.redBright(`ERROR ${dateFormat}`) + message)
      break
    case "CRON":
      console.info(c.magentaBright(`CRON ${dateFormat}`) + message)
      break
    default:
      console.info(c.blueBright(`INFO ${dateFormat}`) + message)
  }
}