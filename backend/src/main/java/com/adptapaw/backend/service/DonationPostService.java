package com.adptapaw.backend.service;



import com.adptapaw.backend.payload.donations.DonationPostDTO;
import com.adptapaw.backend.payload.donations.DonationPostResponseDTO;

public interface DonationPostService {
    DonationPostResponseDTO getAllDonationsPosts();

    DonationPostDTO createDonationsPost(DonationPostDTO donationsDTO);

    DonationPostDTO getAllById(String id);

    DonationPostDTO updateById(String id, DonationPostDTO donationsDTO);

    String DeleteById(String id);
}
