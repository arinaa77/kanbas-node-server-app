import * as attemptsDao from "../Attempts/dao.js";
export default function AttemptRoutes(app) {
  app.put("/api/attempts/:attemptId", async (req, res) => {
    const { attemptId } = req.params;
    const attemptUpdates = req.body;
    const status = await attemptsDao.updateAttempt(attemptId, attemptUpdates);
    res.send(status);
  });
}
