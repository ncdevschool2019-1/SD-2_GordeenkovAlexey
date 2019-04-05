package com.netcracker.edu.fapi.controller;

import com.netcracker.edu.fapi.models.BillingAccountViewModel;
import com.netcracker.edu.fapi.service.BillingAccountDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/billing-accounts")
public class BillingAccountDataController {

    @Autowired
    private BillingAccountDataService billingAccountDataService;


    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public ResponseEntity<List<BillingAccountViewModel>> getBillingAccountsByUserId(@PathVariable String id) {
        return ResponseEntity.ok(billingAccountDataService.getBillingAccountsByUserId(Long.valueOf(id)));
    }

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<BillingAccountViewModel> addBillingAccount(@RequestBody BillingAccountViewModel billingAccount /*todo server validation*/) {
        if (billingAccount != null) {
            return ResponseEntity.ok(billingAccountDataService.addBillingAccount(billingAccount));
        }
        return null;
    }

    @RequestMapping(method = RequestMethod.PUT)
    public ResponseEntity<BillingAccountViewModel> addMoney(@RequestBody BillingAccountViewModel billingAccount) {
        if (billingAccount != null) {
            return ResponseEntity.ok(billingAccountDataService.addMoney(billingAccount));
        }
        return null;
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void deleteBillingAccount(@PathVariable String id) {
        billingAccountDataService.deleteBillingAccount(Long.valueOf(id));
    }

}
