"use client";
import { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { useRouter } from "next/navigation";
import { Marcas } from "@/types/Marcas";
import { Inversion } from "@/types/Inversion";
import { Sector } from "@/types/Sector";
import { Accordion } from "react-bootstrap";
import Link from "next/link";
import { FaSliders } from "react-icons/fa6";

interface Props {
  selectedCategory: string;
  setSelectedCategory: (value: string) => void;
  selectedUbication: string;
  setSelectedUbication: (value: string) => void;
  selectedInversion: string;
  setSelectedInversion: (value: string) => void;
  directorios: Sector[];
  estados: Sector[];
  ubicacion: Sector[];
  categoria: Sector[];
  inversion: Inversion[];
}

const BrandsFilter = ({
  selectedCategory,
  setSelectedCategory,
  selectedUbication,
  setSelectedUbication,
  selectedInversion,
  setSelectedInversion,
  directorios,
  estados,
  ubicacion,
  categoria,
  inversion,
}: Props) => {
  const [selectedEstado, setSelectedEstado] = useState<string>("Todas");
  const router = useRouter();

  // Utility to remove thousand separators (for prices)
  const removeThousandsSeparator = (value: string) => {
    return value.replace(/\./g, "");
  };

  // Update the search functionality to handle `precio__gte` and `precio__lte`
  const filtroBuscar = (category?: string, location?: string, inversion?: string) => {
    let queryParameters: { [key: string]: string } = {};

    if (category) {
      queryParameters["categoria"] = category;
    }
    if (location) {
      queryParameters["ubicacion"] = location;
    }

    if (inversion) {
      if (inversion === "120.000") {
        queryParameters["precio__gte"] = "120000"; // Use clean number for query
      } else {
        const [minPrice, , maxPrice] = inversion.split("-");
        queryParameters["precio__gte"] = removeThousandsSeparator(minPrice);
        queryParameters["precio__lte"] = removeThousandsSeparator(maxPrice);
      }
    }

    const queryString = new URLSearchParams(queryParameters).toString();
    const targetUrl = `/franquicias-en-ecuador${queryString ? `?${queryString}` : ""}`;
    router.push(targetUrl);
  };

  return (
    <div className="w-[30%] lg:flex hidden flex-col gap-y-4 relative">
      <div className="text-lg ml-4">Buscar otro sector</div>
      <div className="flex flex-col gap-y-4">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="sector-select"
          name="categories"
        >
          <option value="">Categoria</option>
          {categoria.map((cat, index) => (
            <option key={index} value={cat.nombre}>
              {cat.nombre}
            </option>
          ))}
        </select>
        <select
          value={selectedUbication}
          onChange={(e) => setSelectedUbication(e.target.value)}
          className="sector-select"
          name="ubication"
        >
          <option value="">País</option>
          {ubicacion.map((ubi, index) => (
            <option key={index} value={ubi.nombre}>
              {ubi.nombre}
            </option>
          ))}
        </select>
        <select
          value={selectedInversion}
          onChange={(e) => setSelectedInversion(e.target.value)}
          className="sector-select"
          name="inversion"
        >
          <option value="">Inversión</option>
          {inversion.map((inv) => (
            <option key={inv.id} value={inv.nombre_url}>
              {inv.nombre}
            </option>
          ))}
        </select>
        <button
          type="button"
          onClick={() => filtroBuscar(selectedCategory, selectedUbication, selectedInversion)}
          className="text-2xl lg:text-base text-white bg-[#0d132f] rounded-2xl"
        >
          Buscar
        </button>
      </div>
    </div>
  );
};

export default BrandsFilter;