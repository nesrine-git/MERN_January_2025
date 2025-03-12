import { Router } from "express";
import { tvShows } from "../server.js";
const router = Router();

// All routes with the /tvShows path
router.route("/tvShows")
    .get((req, res) => {
        res.json(tvShows)
})
    .post((req, res) => {
        tvShows.push(req.body);
        res.json(tvShows)
})

// All routes with the /tvShows/:year path
router.route("/tvShows/:year")
    .get((req, res) => {
        const getTvShowByYear = tvShows.filter(tvShow => tvShow.yearCreated == req.params.year);
        res.json(getTvShowByYear)
})

// All routes with the /tvShows/:tvShow path
router.route("/tvShows/:tvShow")
    .delete ((req, res) => {
        const deleteTvShowByTitle = tvShows.filter(oneTvShow => oneTvShow.tvShow !== req.params.tvShow);
        res.json(deleteTvShowByTitle) 
    })
    .patch((req, res) => {
        tvShows.forEach((oneTvShow, idx) => {
            if (oneTvShow.tvShow == req.params.tvShow) {
                oneTvShow.starring = req.body.starring;
            }
        })
        const updatedTvShow = tvShows.find(oneTvShow => oneTvShow.tvShow == req.params.tvShow)
        res.json(updatedTvShow)
    })

export default router; 
