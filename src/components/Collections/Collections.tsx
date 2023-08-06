import React, { useState } from "react";
import { Accordion, AccordionDetails, AccordionSummary, Stack } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { api } from "../../api/api";
import { IconCollection } from "../../types/types";
import { Icon } from "@iconify/react";

export const Collections = () => {
  const { data: collections } = useQuery({
    queryKey: ["collections"],
    queryFn: (): Promise<[string, IconCollection][]> => api.getAllCollections(),
  });

  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panelKey: string) =>
    (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panelKey : false);
    };

  return (
    <div>
      {collections?.map(([name, collection]) => (
        <Accordion
          key={collection?.name}
          expanded={expanded === collection.name}
          onChange={handleChange(collection.name)}
          sx={{
            color:"white",
            bgcolor: "primary.main",
            ":hover": {
              bgcolor: "primary.main",
              color: "lightgray",
            },
            transition: "background-color .1s ease-in-out",
          }}
        >
          <AccordionSummary>{collection.name}</AccordionSummary>
          <AccordionDetails
            sx={{
              bgcolor: "primary.main",
              ":hover": {
                bgcolor: "primary.light",
                color: "white",
              },
              transition: "background-color .1s ease-in-out",
            }}
          >
            <Stack width="100%" flexDirection="row" gap={2}>
              {collection.samples.map((icon) => (
                <Icon
                  icon={`${name}:${icon}`}
                  key={icon}
                  width={25}
                  height={25}
                  color="white"
                />
              ))}
            </Stack>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};
