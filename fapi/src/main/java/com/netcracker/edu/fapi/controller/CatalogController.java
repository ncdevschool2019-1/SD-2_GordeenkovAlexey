package com.netcracker.edu.fapi.controller;

import com.netcracker.edu.fapi.models.CatalogViewModel;
import com.netcracker.edu.fapi.service.CatalogService;
import com.sun.org.apache.bcel.internal.generic.RETURN;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/cat")
public class CatalogController {

    @Autowired
    private CatalogService catalogService;

    /*   @RequestMapping(value = "/{type}",method = RequestMethod.GET)
       public ResponseEntity<List<CatalogViewModel>> getCatalog(@PathVariable String type) {
           return ResponseEntity.ok(catalogService.getCatalog(type));
       }
       */
    @RequestMapping(value = "/{type}", method = RequestMethod.GET)
    public List<CatalogViewModel> getCatalog(@PathVariable String type) {
        List<CatalogViewModel> list = new ArrayList<>();
        list.add(new CatalogViewModel());
        return list;
    }


}